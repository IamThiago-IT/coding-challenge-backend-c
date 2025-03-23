export default {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
    },
    data: {
        filePath: process.env.DATA_FILE_PATH || './data/cities.tsv'
    }
};