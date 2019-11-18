import axios from 'axios'

/**
 * 设置全局的axios的默认值
 */

axios.defaults.timeout = 2500 * 100;
export const BINGO_TOKEN = "BINGO-TOKEN";



/**
 *拦截器
 */

