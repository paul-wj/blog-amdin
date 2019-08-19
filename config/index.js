const r = require('path').resolve;

const config = {
	port: 9000,
	database: {
		DATABASE: 'own_blog',
		USERNAME: 'root',
		PASSWORD: 'www5576081',
		PORT: '3306',
		HOST: '118.24.181.75'
	},
	redis: {
		host: '118.24.181.75',       //安装好的redis服务器地址
		port: '6379',       //端口
		password: 'WjRedisPASS123'
	},
	databaseNameList: {
		ARTICLE_TABLE_NAME: 'article_info',
		ARTICLE_COMMENT_TABLE_NAME: 'article_comment',
		ARTICLE_REPLY_TABLE_NAME: 'article_reply',
		USER_TABLE_NAME: 'user_info',
		LOGGER_TABLE_NAME: 'log_info',
		TAG_TABLE_NAME: 'tag_info',
		CATEGORY_TABLE_NAME: 'category_info',
		RECIPE_TABLE_NAME: 'recipe',
		RECIPE_DATE_TABLE_NAME: 'recipe_date'
	},
	BASE_PATH: r(__dirname, '../'),
	STATIC_PATH: r(__dirname, '../static'),
	PRIVATE_KEY: r(__dirname, '../private.key'),
	PUBLIC_KEY: r(__dirname, '../public.key')
};
module.exports = config;
