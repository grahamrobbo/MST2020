const gulp = require("gulp")
const plumber = require("gulp-plumber")
const eslint = require("gulp-eslint")
const del = require("del")
const less = require("gulp-less")
const path = require("path")
const sort = require("gulp-sort")
const gulpif = require("gulp-if")
const uglify = require("gulp-uglify-es").default
const prettydata = require("gulp-pretty-data")
const ui5Preload = require("gulp-openui5-preload")
const replace = require("gulp-replace")
const fs = require("fs")
const rename = require("gulp-rename")
const watch = require("gulp-watch")

const APP = "./"
const SRC = `${APP}src`
const BUILD = `${APP}build`
const DIST = `${APP}dist`
const REUSE = `reuse`
const APPNAMESPACE = `yelcho/sample/RoutingNestedComponent`

gulp.task("💄 eslint", () => {
	return gulp
		.src([`${SRC}/**/*.js`, `!${SRC}/app/themes/**/*`])
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
})

gulp.task("eslint:nofail", () => {
	return gulp
		.src([`${SRC}/**/*.js`, `!${SRC}/app/themes/**/*`])
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format())
})

gulp.task("🧹 clean:build", (cb) => {
	del(`${BUILD}`).then(
		() => {
			cb()
		},
		(reason) => {
			cb(reason)
		}
	)
})

gulp.task("🧹 clean:dist", (cb) => {
	del(`${DIST}`).then(
		() => {
			cb()
		},
		(reason) => {
			cb(reason)
		}
	)
})

gulp.task("💾 copy:build", () => {
	return gulp
		.src([
			`${SRC}/**/*.xml`,
			`${SRC}/**/*.js`,
			`${SRC}/**/*.json`,
			`${SRC}/**/*.properties`,
			`${SRC}/**/*.html`,
			`${SRC}/**/*.css`,
			`${SRC}/**/./img/**/*`,
			`!${SRC}/app/themes/**/*`,
		])
		.pipe(gulp.dest(`${BUILD}`))
})

gulp.task("🤺 less", () => {
	return gulp
		.src([`${SRC}/**/*.less`, `!${SRC}/**/colors.less`])
		.pipe(
			less({
				paths: [path.join(__dirname, "less", "includes")],
			})
		)
		.pipe(gulp.dest(`${SRC}`))
})

gulp.task("preload:main", () => {
	return (
		gulp
			.src([`${BUILD}/**/**.+(js|xml)`, `!${BUILD}/reuse/**/*`])
			.pipe(sort())
			.pipe(gulpif("**/*.js", uglify()))
			.pipe(
				gulpif(
					"**/*.xml",
					prettydata({
						type: "minify",
					})
				)
			)
			.pipe(gulpif("**/*.xml", replace("\n", "")))
			.pipe(gulpif("**/*.xml", replace("\t", "")))
			.pipe(gulpif("**/*.xml", replace("\r", "")))
			.pipe(
				ui5Preload({
					prefix: `${APPNAMESPACE}`,
				})
			)
			//.pipe(replace("yelcho/dp/app/", "yelcho/dp/"))
			.pipe(gulp.dest(`${DIST}`))
	)
})

function getFolders(dir) {
	return fs.readdirSync(dir).filter(function (file) {
		return fs.statSync(path.join(dir, file)).isDirectory()
	})
}

function buildReuseComponents(done) {
	const reuseList = getFolders(`${BUILD}/${REUSE}`)

	const tasks = reuseList.map((reuseComponent) => {
		// Right here, we return a function per folder
		const buildPreload = () =>
			gulp
				.src([`${BUILD}/reuse/${reuseComponent}/**/**.+(js|xml)`])
				.pipe(sort())
				.pipe(gulpif("**/*.js", uglify()))
				.pipe(
					gulpif(
						"**/*.xml",
						prettydata({
							type: "minify",
						})
					)
				)
				.pipe(gulpif("**/*.xml", replace("\n", "")))
				.pipe(gulpif("**/*.xml", replace("\t", "")))
				.pipe(gulpif("**/*.xml", replace("\r", "")))
				.pipe(
					ui5Preload({
						prefix: `${APPNAMESPACE}/reuse/${reuseComponent}`,
					})
				)
				.pipe(gulp.dest(`${DIST}/reuse/${reuseComponent}/`))

		buildPreload.displayName = `🧩 Component preload ${reuseComponent}`
		return buildPreload
	})

	const reuseTasksDone = (seriesDone) => {
		seriesDone()
		done()
	}

	return gulp.series(...tasks, reuseTasksDone)()
}

gulp.task("preload:reuseComponents", gulp.series(buildReuseComponents))

gulp.task(
	"📚 preload",
	gulp.parallel("preload:main", "preload:reuseComponents")
)

gulp.task("💾 copy:dist:minified", () => {
	return gulp
		.src([`${BUILD}/**/*`])
		.pipe(gulpif("**/*.js", uglify()))
		.pipe(
			gulpif(
				"**/*.xml",
				prettydata({
					type: "minify",
				})
			)
		)
		.pipe(gulpif("**/*.xml", replace("\n", "")))
		.pipe(gulpif("**/*.xml", replace("\t", "")))
		.pipe(gulpif("**/*.xml", replace("\r", "")))
		.pipe(gulp.dest(`${DIST}`))
})

gulp.task("💾 copy:dist:dbg", () => {
	return gulp
		.src([`${BUILD}/**/*.js`])
		.pipe(
			rename((filePath) => {
				let name = filePath.basename.split(".")
				name[0] += "-dbg"
				filePath.basename = name.join(".")
			})
		)
		.pipe(gulp.dest(`${DIST}`))
})

gulp.task("✅ successMessage", (cb) => {
	cb()
	console.log(
		"\x1b[32m%s\x1b[0m",
		"        ✅     Successfully Completed     ✅"
	)
})

gulp.task(
	"dist",
	gulp.series([
		"💄 eslint",
		"🧹 clean:build",
		"🧹 clean:dist",
		"🤺 less",
		"💾 copy:build",
		"📚 preload",
		"💾 copy:dist:minified",
		"💾 copy:dist:dbg",
		"🧹 clean:build",
		"✅ successMessage",
	])
)

gulp.task("watch", () => {
	return watch(`${SRC}/**/*`, gulp.series(["dist"]))
})
