import axios from 'axios'
// const host = process.env.NODE_ENV === 'production' ? 'https://api.douban.com/' : '/host'

const host = '//book.airtlab.com/'

/**
 * zhuanzhuan: https://m.zhuanzhuan.58.com/youpin/website/list.html?smark=ws11
 * xiaomi: https://m.mi.com
 * sudanyouxuan: https://m.sdyxmall.com/v1/?co=sdyx#/
 */

/**
 * 豆瓣电影 api
 * https://developers.douban.com/wiki/?title=movie_v2#subject
 */

export default {
  // 电影 top250
  getMovieTop250 (start, count) {
    return axios.get(`${host}movie/top250?start=${start}&count=${count}`)
  },
  getMovies (tag, start, count) {
    return axios.get(`${host}movie/${tag}?start=${start}&count=${count}`)
  },
  // 电影详情
  getMovieDetail (movieId) {
    return axios.get(`${host}movie/subject/${movieId}`)
  },
  // 音乐搜索
  searchMusic (tag) {
    return axios.get(`${host}music/search?tag=${tag}`)
  }
}
