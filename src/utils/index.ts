/*
 * @Author: zhouyou@werun
 * @Descriptions: 性能测试工具函数定义
 * @TodoList: 无
 * @Date: 2020-05-22 16:28:42
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2020-05-22 16:32:51
 */

/**
 * 获取首次绘制时间
 *
 * @export
 * @returns {(number | null)}
 */
export function getFPTime(): number | null {
  const timings: PerformanceEntry = performance.getEntriesByType('paint')[0];
  return timings ? Math.round(timings.startTime) : null;
}
