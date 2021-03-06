import React from 'react';
import ReactEcharts from '../../../../components/ReactECharts';
import CHARTCONFIG from '../../../../constants/ChartConfig';

const line4 = {};

line4.options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Affiliate', 'Video Ads', 'Direct', 'Search'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {show: true, title: 'save'}
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Sum',
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate',
      type: 'line',
      stack: 'Sum',
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Sum',
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Sum',
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search',
      type: 'line',
      stack: 'Sum',
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

const Chart = () => (
  <ReactEcharts option={line4.options} showLoading={false} />
);

export default Chart;
