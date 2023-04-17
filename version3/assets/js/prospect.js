// piechart-1
var chartDom1 = document.getElementById('piechart-1');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            'Age 16-29',
            'Age 30-44',
            'Age 45-59',
            'Age 60+'

        ]
    },
    series: [
        {
            name: 'Sex distribution',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 14
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 63.1, name: 'male' },
                { value: 36.9, name: 'female' },

            ]
        },
        {
            name: 'Age distribution',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 28
            },
            label: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#F6F8FC',
                // borderColor: '#8C8D8E',
                // borderWidth: 1,
                // borderRadius: 4,
                // rich: {
                //     a: {
                //         color: '#6E7079',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     hr: {
                //         borderColor: '#8C8D8E',
                //         width: '100%',
                //         borderWidth: 1,
                //         height: 0
                //     },
                //     b: {
                //         color: '#4C5058',
                //         fontSize: 14,
                //         fontWeight: 'bold',
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#fff',
                //         backgroundColor: '#4C5058',
                //         padding: [3, 4],
                //         borderRadius: 4
                //     }
                // }
                position: 'inner',
                fontSize: 14
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 32.3, name: 'Age 16-29' },
                { value: 49.6, name: 'Age 30-44' },
                { value: 17.8, name: 'Age 45-59' },
                { value: 0.3, name: 'Age 60+' }

            ]
        }
    ]
};

option1 && myChart1.setOption(option1);


// piechart-2

var chartDom2 = document.getElementById('piechart-2');
var myChart2 = echarts.init(chartDom2);
var option2;

option2 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            '3000-',
            '3000-5000',
            '5000-10000',
            '10000+'
        ]
    },
    series: [
        {
            name: 'Average monthly wage',
            type: 'pie',
            radius: ['20%', '50%'],
            labelLine: {
                length: 28
            },
            label: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#F6F8FC',
                // borderColor: '#8C8D8E',
                // borderWidth: 1,
                // borderRadius: 4,
                // rich: {
                //     a: {
                //         color: '#6E7079',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     hr: {
                //         borderColor: '#8C8D8E',
                //         width: '100%',
                //         borderWidth: 1,
                //         height: 0
                //     },
                //     b: {
                //         color: '#4C5058',
                //         fontSize: 14,
                //         fontWeight: 'bold',
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#fff',
                //         backgroundColor: '#4C5058',
                //         padding: [3, 4],
                //         borderRadius: 4
                //     }
                // }
                position: 'inner',
                fontSize: 13
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 18.6, name: '3000-' },
                { value: 35.1, name: '3000-5000' },
                { value: 36.8, name: '5000-10000' },
                { value: 9.5, name: '10000+' }
            ]
        }
    ]
};
option2 && myChart2.setOption(option2);


// piechart-3
var chartDom3 = document.getElementById('piechart-3');
var myChart3 = echarts.init(chartDom3);
var option3;

option3 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            'self-employed',
            'other'

        ]
    },
    series: [
        {
            name: 'Proportion of self-employment',
            type: 'pie',
            radius: ['20%', '50%'],
            labelLine: {
                length: 28
            },
            label: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#F6F8FC',
                // borderColor: '#8C8D8E',
                // borderWidth: 1,
                // borderRadius: 4,
                // rich: {
                //     a: {
                //         color: '#6E7079',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     hr: {
                //         borderColor: '#8C8D8E',
                //         width: '100%',
                //         borderWidth: 1,
                //         height: 0
                //     },
                //     b: {
                //         color: '#4C5058',
                //         fontSize: 14,
                //         fontWeight: 'bold',
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#fff',
                //         backgroundColor: '#4C5058',
                //         padding: [3, 4],
                //         borderRadius: 4
                //     }
                // }
                position: 'inner',
                fontSize: 13
            },
            data: [

                { value: 27.5, name: 'self-employed' },
                { value: 72.5, name: 'other' },


            ]
        }
    ]
};

option3 && myChart3.setOption(option3);


// linechart-1
var chartDom4 = document.getElementById('linechart-1');
var myChart4 = echarts.init(chartDom4);
var option4;

option4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Manufacturing industry', 'Construction indu,stry', 'IT industry', 'Service industry', 'Financial industry', 'Retail industry']
    },
    series: [
        {
            name: '2021',
            type: 'bar',
            data: [8769, 2546, 19782, 48673, 3890, 14876]
        },
        {
            name: '2022',
            type: 'bar',
            data: [9802, 3039, 29452, 56011, 4612, 16436]
        }
    ]
};

option4 && myChart4.setOption(option4);


// linechart-2
var chartDom5 = document.getElementById('linechart-2');
var myChart5 = echarts.init(chartDom5);
var option5;

option5 = {
    xAxis: {
        type: 'category',
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [918.6, 1006.2, 1037.1, 1072.3, 1107.9, 1143.3, 1156.1, 1187.5],
            type: 'line',
            smooth: true
        }
    ]
};

option5 && myChart5.setOption(option5);

// clock
var chartDom6 = document.getElementById('clock');
var myChart6 = echarts.init(chartDom6);
var option6;

option6 = {
    series: [
        {
            name: 'hour',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 12,
            splitNumber: 12,
            clockwise: true,
            axisLine: {
                lineStyle: {
                    width: 13,
                    color: [[1, 'rgba(0,0,0,0.6)']],
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 15
                }
            },
            splitLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2
                }
            },
            axisLabel: {
                fontSize: 27,
                distance: 25,
                formatter: function (value) {
                    if (value === 0) {
                        return '';
                    }
                    return value + '';
                }
            },
            // anchor: {
            //     show: true,
            //     icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
            //     showAbove: false,
            //     offsetCenter: [0, '-35%'],
            //     size: 120,
            //     keepAspect: true,
            //     itemStyle: {
            //         color: '#707177'
            //     }
            // },
            pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 12,
                length: '55%',
                offsetCenter: [0, '8%'],
                itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                }
            },
            detail: {
                show: false
            },
            title: {
                offsetCenter: [0, '30%']
            },
            data: [
                {
                    value: 0
                }
            ]
        },
        {
            name: 'minute',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            clockwise: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '70%',
                offsetCenter: [0, '8%'],
                itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                }
            },
            anchor: {
                show: true,
                size: 20,
                showAbove: false,
                itemStyle: {
                    borderWidth: 15,
                    borderColor: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                }
            },
            detail: {
                show: false
            },
            title: {
                offsetCenter: ['0%', '-40%']
            },
            data: [
                {
                    value: 0
                }
            ]
        },
        {
            name: 'second',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            animationEasingUpdate: 'bounceOut',
            clockwise: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 4,
                length: '85%',
                offsetCenter: [0, '8%'],
                itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                }
            },
            anchor: {
                show: true,
                size: 15,
                showAbove: true,
                itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                }
            },
            detail: {
                show: false
            },
            title: {
                offsetCenter: ['0%', '-40%']
            },
            data: [
                {
                    value: 0
                }
            ]
        }
    ]
};
setInterval(function () {
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes() + second / 60;
    var hour = (date.getHours() % 12) + minute / 60;
    option6.animationDurationUpdate = 300;
    myChart6.setOption({
        series: [
            {
                name: 'hour',
                animation: hour !== 0,
                data: [{ value: hour }]
            },
            {
                name: 'minute',
                animation: minute !== 0,
                data: [{ value: minute }]
            },
            {
                animation: second !== 0,
                name: 'second',
                data: [{ value: second }]
            }
        ]
    });
}, 1000);

option6 && myChart6.setOption(option6);
