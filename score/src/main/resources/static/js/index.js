//加载js代码
$(function () {
    //定义是否全屏变量
    var isFullScreen = false;
    window.onresize = function () {
        //显示四个图表
        right_part1.resize();
        left_part1.resize();
        left_part2.resize();
        right_part2.resize();
        //进入全屏和退出全屏
        if (!isFullScreen) {
            $(".screen").css("backgroundImage", "url('image/fullScreen.png')");
        } else {
            $(".screen").css("backgroundImage", "url('image/outFullScreen.png')");
        }
    }
    //加载四个图表 分别为左1，左2，右1，右2
    var left_part1 = echarts.init(document.getElementById("left_part1"), "light");
    var left_part2 = echarts.init(document.getElementById("left_part2"), "light");
    var right_part1 = echarts.init(document.getElementById("right_part1"), "light");
    var right_part2 = echarts.init(document.getElementById("right_part2"), "light");

    /**
     *
     * 左1：历年录取分数线
     *
     */
    left_part1.setOption({
        title: {
            textStyle: {
                color: 'white'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            /*此处为学院数据*/
            data: [],
            textStyle: {
                color: 'white'
            }

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            /*此处为年份：2016-2020年*/
            data: [],

            axisLabel: {
                show: true,

                textStyle: {
                    color: 'white'
                },
            },

            axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: 'white'
                }
            }

        },
        yAxis: {
            type: 'value',

            axisLabel: {
                show: true,

                textStyle: {
                    color: 'white'
                },
            },

            axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: '艺传',
            type: 'line',
            stack: '总量',
            /*对应name学院的分数线*/
            data: [],

            lineStyle: {
                color: 'red'
            }
        },
            {
                name: '机械',
                type: 'line',
                stack: '总量',
                /*对应name学院的分数线*/
                data: [],

                lineStyle: {
                    color: 'yellow'
                }
            },
            {
                name: '数计',
                type: 'line',
                stack: '总量',
                /*对应name学院的分数线*/
                data: [],

                lineStyle: {
                    color: 'purple'
                }
            },
            {
                name: '经管',
                type: 'line',
                stack: '总量',
                /*对应name学院的分数线*/
                data: [],
                lineStyle: {
                    color: 'black'
                },

            },
            {
                name: '电气',
                type: 'line',
                stack: '总量',
                /*对应name学院的分数线*/
                data: [],
                lineStyle: {
                    color: 'green'
                },
            },
            {
                name: '外院',
                type: 'line',
                stack: '总量',
                /*对应name学院的分数线*/
                data: [],
                lineStyle: {
                    color: 'orange'
                },
            },
        ]
    })

    /**
     *
     * 左2：20年录取人数
     *
     */
    left_part2.setOption({
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            /*此处为学院名称*/
            data: [],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            /*此处为2020年录取人数*/
            data: [],
        }]
    });

    /**
     *
     * 右1：各学院分数线
     *
     */
    right_part1.setOption({
        title: {
            /*text: '各学院与去年数据对比',*/
            /*subtext: '数据来自学校官网',*/
            textStyle: {
                color: 'white'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            /* 此处为对比的图例：2019年和2020年*/
            data: [],
            textStyle: {
                color: 'white'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white'
                },
            },
            axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            type: 'category',
            /*此处为学院名称*/
            data: [],
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white'
                },
            },
            axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: '2019年',
            type: 'bar',
            /*此处为2019年各学院录取分数线*/
            data: [],
        },
            {
                name: '2020年',
                type: 'bar',
                /*此处为2020年各学院录取分数线*/
                data: [],
            }
        ]
    })

    /**
     *
     * 右2：2020年录取分数线
     *
     */
    right_part2.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            /*此处为学院名称*/
            data: []
        },
        series: [{
            name: '分数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            /*data: [{
                value: 2020年对应学院分数线,
                name: '对应学院'
            },... */
            data: [],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]

    });

    //异步请求后端数据
    $.ajax({
        type: "POST",
        url: "/score/data",
        async: false,
        cache: false,
        data: {},
        dataType: "json",
        success: function (data) {
            //给左1：添加数据库数据
            left_part1.setOption({
                legend: {data: data.college},
                xAxis: {data: data.year},
                series: [{name: '艺传', data: data.college01},
                    {name: '机械', data: data.college02},
                    {name: '数计', data: data.college03},
                    {name: '经管', data: data.college04},
                    {name: '电气', data: data.college05},
                    {name: '外院', data: data.college06}
                ]
            });
            //给左2：添加数据库数据
            left_part2.setOption({
                xAxis: {data: data.college},
                series: {data: data.number}
            });

            //给右1：添加数据库数据
            right_part1.setOption({
                legend: {data: [data.year[3], data.year[4]]},
                yAxis: {data: data.college},
                series: [{name: '2019', data: data.grade02},
                    {name: '2020', data: data.grade01}
                ]

            });
            //给右2：添加数据库数据
            right_part2.setOption({
                legend: {data: data.college},
                series: {data: data.list01}
            });
        },
        //如果异步请求失败将答应错误
        error: function (error) {
            console.log(error);
        }
    });


    /**
     *
     * 百度地图api功能
     *
     */
        // 创建Map实例
    var map = new BMap.Map("allmap");
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(114.228926, 30.659446), 18);
    /* 信息窗口 */
    // 设置地图显示的城市 此项是必须设置的
    map.setCurrentCity("金银湖校区");
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
    /* 地图控件和标注 */
    var point = new BMap.Point(114.228695, 30.658792);
    // 创建标注
    var marker1 = new BMap.Marker(point);
    // 将标注添加到地图中
    map.addOverlay(marker1);
    var opts1 = {
        // 信息窗口宽度
        width: 200,
        // 信息窗口高度
        height: 100,
        // 信息窗口标题
        title: "武汉轻工大学图书馆",
        message: "图书馆"
    }
    // 创建信息窗口对象
    var infoWindow1 = new BMap.InfoWindow(
        "1980年起独立建馆,2009年金银湖校区图书馆建成启用,内含丰富藏书。", opts1);
    marker1.addEventListener("click", function () {
        map.openInfoWindow(infoWindow1, point); //开启信息窗口
    });
    var point2 = new BMap.Point(114.231102, 30.657008);
    // 创建标注
    var marker2 = new BMap.Marker(point2);
    // 将标注添加到地图中
    map.addOverlay(marker2);
    var opts2 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "数学与计算机学院", // 信息窗口标题
        message: "数学与计算机学院"
    }
    var infoWindow2 = new BMap.InfoWindow(
        " 现有计算机科学与技术、软件工程、网络工程、数字件工程”,目前在校本科生、研究生1600余名。",
        opts2); // 创建信息窗口对象
    marker2.addEventListener("click", function () {
        map.openInfoWindow(infoWindow2, point2); //开启信息窗口
    });

    var point3 = new BMap.Point(114.229292, 30.661812);
    var marker3 = new BMap.Marker(point3); // 创建标注
    map.addOverlay(marker3); // 将标注添加到地图中
    var opts3 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "机械工程学院", // 信息窗口标题
        message: "机械工程学院"
    }
    var infoWindow3 = new BMap.InfoWindow(
        "武汉轻工大学机械工程学院成立于1983年，1986年招收首届食品机械专业本科生，2004年开始招收研究生。",
        opts3); // 创建信息窗口对象
    marker3.addEventListener("click", function () {
        map.openInfoWindow(infoWindow3, point3); //开启信息窗口
    });

    var point4 = new BMap.Point(114.229952, 30.658989);
    var marker4 = new BMap.Marker(point4); // 创建标注
    map.addOverlay(marker4); // 将标注添加到地图中
    var opts4 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "艺术与传媒学院", // 信息窗口标题
        message: "艺术与传媒学院"
    }
    var infoWindow4 = new BMap.InfoWindow(
        "艺术与传媒学院,潮流与文化并存。",
        opts4); // 创建信息窗口对象
    marker4.addEventListener("click", function () {
        map.openInfoWindow(infoWindow4, point4); //开启信息窗口
    });

    var point5 = new BMap.Point(114.227154, 30.656989);
    var marker5 = new BMap.Marker(point5); // 创建标注
    map.addOverlay(marker5); // 将标注添加到地图中
    var opts5 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "经济与管理学院", // 信息窗口标题
        message: "经济与管理学院"
    }
    var infoWindow5 = new BMap.InfoWindow(
        "经济与管理学院建于1984年,现有老师和学生2600余名。", opts5); // 创建信息窗口对象
    marker5.addEventListener("click", function () {
        map.openInfoWindow(infoWindow5, point5); //开启信息窗口
    });

    var point6 = new BMap.Point(114.228699, 30.659849);
    var marker6 = new BMap.Marker(point6); // 创建标注
    map.addOverlay(marker6); // 将标注添加到地图中
    var opts6 = {
        width: 200, // 信息窗口宽度
        height: 150, // 信息窗口高度
        title: "金银湖校区", // 信息窗口标题
        message: "金银湖校区"
    }
    var infoWindow6 = new BMap.InfoWindow(
        "武汉轻工大学（Wuhan Polytechnic University）是全国最早培养粮食行业专门人才的学校，是国家粮食和物资储备局与湖北省人民政府共建高校、湖北省国内一流学科建设高校，入选第一批卓越农林人才教育培养计划。", opts6); // 创建信息窗口对象
    marker6.addEventListener("click", function () {
        map.openInfoWindow(infoWindow6, point6); //开启信息窗口
    });

    /**
     *
     * 缩放屏幕开始
     *
     */
    $(".screen").click(function () {
        fullScreen();
    })

    function fullScreen() {
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
            el.mozRequestFullScreen || el.msRequestFullScreen;
        var exitMethod = document.exitFullscreen || document.mozCancelFullScreen ||
            document.webkitExitFullscreen || document.webkitExitFullscreen;
        if (!isFullScreen) {
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
        if (isFullScreen) {
            if (exitMethod) {
                exitMethod.call(document);
            } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
        isFullScreen = !isFullScreen;
    }
})