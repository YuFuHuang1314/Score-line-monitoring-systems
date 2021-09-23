轻工大学录取分数线监测系统
一、	环境
系统：windows10
开发工具：IntelliJ IDEA 2020.2.3 
maven版本：apache-maven-3.6.3
mysql: mysql-5.6.37
jdk:jdk1.9

二、	系统架构
数据库：mysql
前端：html+css+js+jquery+echarts+ajax
后端：springboot+mybatis+maven

三、	开发时间
2020.12.15-2020.12.28

四、	系统内容
1.	系统描述：
武汉轻工大学录取分数线监测系统是对2015-2020年艺传、机械、数计、经管、电气、外院六个学院分数线情况的统计，页面主要包含四大模块，头部：标题和一个全屏和退出全屏按钮，左边：历年录取分数线的折线图和2020年录取人数的柱形图，中间：显示预测2021年分数线信息的跑马灯和武汉轻工大学（金银湖校区）的百度地图，右边：2019年和2020年分数线对比的条形图和一个显示2020录取人数的扇形图。

2.	技术描述：
a)	前端采用html+css+js+jquery使页面有了动态的效果
b)	使用echarts显示了图表，实现了可视化效果
c)	前端使用ajax，很好实现了前后端的交互
d)	后端使用springboot和mybatis更快速的和数据库mysql建立了联系

五、	实现的主要步骤
1.	数据库：score.sql
/*
 Navicat Premium Data Transfer

 Source Server         : school
 Source Server Type    : MySQL
 Source Server Version : 50637
 Source Host           : localhost:3306
 Source Schema         : score

 Target Server Type    : MySQL
 Target Server Version : 50637
 File Encoding         : 65001

 Date: 28/12/2020 12:28:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score`  (
  `sid` int(10) NOT NULL,
  `year` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '年份',
  `college` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '学院',
  `grade` int(10) NULL DEFAULT NULL COMMENT '分数',
  `number` int(10) NULL DEFAULT NULL COMMENT '人数',
  PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES (1, '2016', '艺传', 510, 395);
INSERT INTO `score` VALUES (2, '2016', '机械', 523, 366);
INSERT INTO `score` VALUES (3, '2016', '数计', 526, 390);
INSERT INTO `score` VALUES (4, '2016', '经管', 535, 377);
INSERT INTO `score` VALUES (5, '2016', '电气', 524, 360);
INSERT INTO `score` VALUES (6, '2016', '外院', 530, 112);
INSERT INTO `score` VALUES (7, '2017', '艺传', 491, 432);
INSERT INTO `score` VALUES (8, '2017', '机械', 491, 355);
INSERT INTO `score` VALUES (9, '2017', '数计', 492, 402);
INSERT INTO `score` VALUES (10, '2017', '经管', 499, 398);
INSERT INTO `score` VALUES (11, '2017', '电气', 492, 396);
INSERT INTO `score` VALUES (12, '2017', '外院', 496, 120);
INSERT INTO `score` VALUES (13, '2018', '艺传', 521, 414);
INSERT INTO `score` VALUES (14, '2018', '机械', 522, 374);
INSERT INTO `score` VALUES (15, '2018', '数计', 524, 414);
INSERT INTO `score` VALUES (16, '2018', '经管', 529, 417);
INSERT INTO `score` VALUES (17, '2018', '电气', 524, 401);
INSERT INTO `score` VALUES (18, '2018', '外院', 527, 144);
INSERT INTO `score` VALUES (19, '2019', '艺传', 513, 413);
INSERT INTO `score` VALUES (20, '2019', '机械', 513, 363);
INSERT INTO `score` VALUES (21, '2019', '数计', 516, 391);
INSERT INTO `score` VALUES (22, '2019', '经管', 523, 422);
INSERT INTO `score` VALUES (23, '2019', '电气', 515, 402);
INSERT INTO `score` VALUES (24, '2019', '外院', 518, 122);
INSERT INTO `score` VALUES (25, '2020', '艺传', 510, 415);
INSERT INTO `score` VALUES (26, '2020', '机械', 520, 372);
INSERT INTO `score` VALUES (27, '2020', '数计', 529, 404);
INSERT INTO `score` VALUES (28, '2020', '经管', 520, 431);
INSERT INTO `score` VALUES (29, '2020', '电气', 528, 406);
INSERT INTO `score` VALUES (30, '2020', '外院', 517, 131);

SET FOREIGN_KEY_CHECKS = 1;

2.	工程文件介绍
 
1：项目名称，2：主文件，3：包名，4：controller层，与前台页面交互，
5：domain实体层，6：mapper层：调用资源文件夹mapper中mapper.xml文件内容，7：springboot启动文件，项目的启动文件，8：资源文件夹，9：存mybatis的xml文件，调用数据库的内容，10：静态文件，前端文件，11：首页，12：配置文件，13：测试文件，14:pom坐标

3.	实现的主要代码
a)	首页：index.html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=YmT7XzL4O9IplhNmNo93NwlgwH9PF19U"></script>
      <script src="http://api.map.baidu.com/library/AreaRestriction/1.2/src/AreaRestriction_min.js"></script>
      <link rel="stylesheet" href="css/initialize.css">
      <link rel="stylesheet" href="css/index.css">
      <script src="js/echarts.min.js"></script>
      <script src="theme/light.js"></script>
      <script src="js/jquery.min.js"></script>
      <script src="js/index.js"></script>
      <title>武汉轻工大学录取分数线监测系统</title>
   </head>

   <body>
      <!--大div-->
      <div class="chart-warp">
         <!--头部-->
         <div class="head-view">
            <div class="head-text">
               武汉轻工大学录取分数线监测系统
               <div class="head-text view_line" style="left: 36px;">
                  <div class="head_text_view"></div>
               </div>
               <div class="head-text view_line" style="left: 50px;">
                  <div class="head_text_view"></div>
               </div>
               <div class="head-text view_line" style="right: 16px;">
                  <div class="head_text_view"></div>
               </div>
               <div class="head-text view_line" style="right: 30px;">
                  <div class="head_text_view"></div>
               </div>
            </div>
            <div class="screen"></div>
         </div>
         <!--内容区域-->
         <div class="content-warp">
            <!--左边-->
            <div class="left-show">
               <div class="left-content ">
                  <div class="left_title">历年录取分数线</div>
                  <div class="left_line1" id="left_part1"></div>
                  <div class="border-t_l corner"></div>
                  <div class="border-t_r corner"></div>
                  <div class="border-b_l corner"></div>
                  <div class="border-b_r corner"></div>
               </div>
               <div class="left-content">
                  <div class="left_title">20年录取人数</div>
                  <div class="left_title_tip">
                     <marquee behavior="scroll" direction="left" id="water_bar_tip"></marquee>
                  </div>
                  <div class="left_bar1" id="left_part2"></div>
                  <div class="border-t_l corner"></div>
                  <div class="border-t_r corner"></div>
                  <div class="border-b_l corner"></div>
                  <div class="border-b_r corner"></div>
               </div>
            </div>
            <!--中间-->
            <div class="center-show">
               <div class="center-content center-title">
                  <marquee behavior="scroll" direction="left" scrollamount="15">
                     <span style="color: Lime;">欢迎报考武汉轻工大学</span>
                     <span style="color: red;">建议报数学与计算机学院</span>
                     <span style="color: orange;">预测2021分数线和2020年相差不大，在520分上下</span>
                  </marquee>
               </div>
               <div class="center-content center-content-bottom" id="allmap">
                  <div class="border-t_l corner"></div>
                  <div class="border-t_r corner"></div>
                  <div class="border-b_l corner"></div>
                  <div class="border-b_r corner"></div>
               </div>
            </div>
            <!--右边-->
            <div class="right-show">
               <div class="right-content">
                  <div class="right_title">各学院分数线</div>
                  <div class="right_pie1" id="right_part1"></div>
                  <div class="border-t_l corner"></div>
                  <div class="border-t_r corner"></div>
                  <div class="border-b_l corner"></div>
                  <div class="border-b_r corner"></div>
               </div>
               <div class="right-content">
                  <div class="right_title">20年分数线</div>
                  <div class="right_pie1" id="right_part2"></div>
                  <div class="border-t_l corner"></div>
                  <div class="border-t_r corner"></div>
                  <div class="border-b_l corner"></div>
                  <div class="border-b_r corner"></div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>

b)	Index.js
四个图表
 
异步请求
 
百度地图
 
c)	pom坐标
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <!--所有的springboot工程都必须继承spring-boot-starter-parent-->
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.1.RELEASE</version>
  </parent>
  <groupId>com.whpu</groupId>
  <artifactId>score</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <name>score Maven Webapp</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>
  <dependencies>
    <!--web功能的起步依赖-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!--热部署配置-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
    </dependency>

    <!--@ConfiguaritionProperties的执行器的配置-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-configuration-processor</artifactId>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <!--mybatis起步依赖-->
    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>1.1.1</version>
    </dependency>
    <!--jdk9需要导入如下坐标-->
    <dependency>
      <groupId>javax.xml.bind</groupId>
      <artifactId>jaxb-api</artifactId>
      <version>2.3.0</version>
    </dependency>
    <!-- MySQL连接驱动 -->
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>

    <dependency>
      <groupId>net.sourceforge.nekohtml </groupId>
      <artifactId>nekohtml </artifactId>
      <version>1.9.22 </version>
    </dependency>
  </dependencies>
</project>

d)	ScoreController
@Autowired
private ScoreMapper scoreMapper;

//这是springboot与echarts整合部分
//"/data"这是ajax异步请求的名称
@RequestMapping("/data")
@ResponseBody
public Map<String, Object> data01() {
    /*查询各学院2020年录取人数和对应学院*/
    //定义list一个保存2020年学院和人数的集合
    List<Score> list = scoreMapper.queryScoreList();
    //定义一个学院数组college
    String[] college = new String[list.size()];
    //定义一个存储2020年人数的数组number
    int[] number = new int[list.size()];
    //将集合list转化成对应的数组
    arrlist(college,number,list);

    /*查询2020年和2019年各学院分数线*/
    //定义一个集合list01保存2020年各学院的分数线
    List<Score> list01 = scoreMapper.queryScoreList01("2020");
    //定义一个集合gr保存2019年各学院的分数线
    List<Score> gr = scoreMapper.queryScoreList01("2019");
    //定义一个存储2020年各学院的分数线的数组grade01
    int[] grade01 = new int[list01.size()];
    //定义一个存储2019年各学院的分数线的数组grade02
    int[] grade02 = new int[gr.size()];
    //将对应的集合转化成对应的数组
    arrlist(grade01,list01);
    arrlist(grade02,gr);

    /*查询年份*/
    //定义一个保存年份的集合list02
    List<Score> list02 = scoreMapper.queryScoreList02();
    //定义一个保存年份的数组year
    String[] year = new String[list02.size()];
    //将年份集合转化成数组
    arrlist(year,list02);

   /*按学院进行查询每年的分数线*/
    //定义一个集合保存对应学院每年的分数线
    List<Score> yc = scoreMapper.queryScoreList03("艺传");
    List<Score> jx = scoreMapper.queryScoreList03("机械");
    List<Score> sj = scoreMapper.queryScoreList03("数计");
    List<Score> jg = scoreMapper.queryScoreList03("经管");
    List<Score> dq = scoreMapper.queryScoreList03("电气");
    List<Score> wy = scoreMapper.queryScoreList03("外院");
    //定义一个数组保存对应学院每年的分数线
    int[] college01 = new int[yc.size()];
    int[] college02 = new int[jx.size()];
    int[] college03 = new int[sj.size()];
    int[] college04 = new int[jg.size()];
    int[] college05 = new int[dq.size()];
    int[] college06 = new int[wy.size()];
    //将对应的集合转化成对应的数组
    arrlist(college01,yc);
    arrlist(college02,jx);
    arrlist(college03,sj);
    arrlist(college04,jg);
    arrlist(college05,dq);
    arrlist(college06,wy);

    /*保存*/
    //定义一个map集合，方便存取数据，key要传给前端echarts
    Map<String, Object> map = new HashMap<>();
    //将学院数据的数组保存到map集合中
    map.put("college", college);
    //将2020年人数的数组number保存到map集合中
    map.put("number", number);
    //保存2020年学院和人数的集合到map中
    map.put("list", list);
    //2020年各学院的分数线的集合保存到map中
    map.put("list01", list01);
    //2020年各学院的分数线的数组grade01保存到map中
    map.put("grade01", grade01);
    //2019年各学院的分数线的数组grade02保存到map中
    map.put("grade02", grade02);
    //将保存年份的集合year保存到map中
    map.put("year", year);
    //"艺传"每年的分数线保存到map中
    map.put("college01", college01);
    //"机械"每年的分数线保存到map中
    map.put("college02", college02);
    //"数计"每年的分数线保存到map中
    map.put("college03", college03);
    //"经管"每年的分数线保存到map中
    map.put("college04", college04);
    //"电气"每年的分数线保存到map中
    map.put("college05", college05);
    //"外院"每年的分数线保存到map中
    map.put("college06", college06);
    return map;
}
//定义三个重载的集合转化为数组的方法
public void arrlist(String[] str,int[] num,List<Score> list){
    for (int i = 0; i <list.size() ; i++) {
        str[i] = list.get(i).getName();
        num[i] = list.get(i).getValue();
    }
}
public void arrlist(String[] str,List<Score> list){
    for (int i = 0; i <list.size() ; i++) {
        str[i] = list.get(i).getName();
    }
}
public void arrlist(int[] num,List<Score> list){
    for (int i = 0; i <list.size() ; i++) {
        num[i] = list.get(i).getValue();
    }
}



e)	实体Score
public class Score {
    //对应eacharts的name和value
    //定义一个Integer型的value
    private Integer value;
    //定义一个String型的name
    private String name;

    //生成get和set方法
    public Integer getValue() {
        return value;
    }
    public void setValue(Integer value) {
        this.value = value;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}



f)	ScoreMapper
@Mapper
public interface ScoreMapper {
    //1:查询各学院2020年录取人数和学院的名称
    public List<Score> queryScoreList();
    //2:查询各学院录取分数线
    public List<Score> queryScoreList01(@Param(value = "year")String year);
    //3:查询年份
    public List<Score> queryScoreList02();
    //4:查询各学院每年录取分数线
    public List<Score> queryScoreList03(@Param(value = "college")String college);
}


g)	ScoreMapper.xml
<mapper namespace="com.whpu.mapper.ScoreMapper">
    <!--1:查询各学院2020年录取人数和学院的名称-->
    <select id="queryScoreList" resultType="score">
        select  number as value,college as name  from score WHERE `year`=2020;
    </select>
    <!--2:查询各学院录取分数线-->
    <select id="queryScoreList01" resultType="score">
        select  grade as value,college as name from score WHERE `year`=#{year};
    </select>
    <!--3:查询年份-->
    <select id="queryScoreList02" resultType="score">
        select distinct `year` as name from score;
    </select>
    <!--4:查询各学院每年录取分数线-->
    <select id="queryScoreList03" resultType="score">
        select  grade as value  from score  WHERE college=#{college};
    </select>
</mapper>

h)	配置文件：application.xml和application.yml
#数据库连接信息
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/score?useUnicode=true&characterEncoding=utf8
spring.datasource.username=root
spring.datasource.password=123456
#配置mybatis的信息
#spring集成Mybatis环境
#pojo别名扫描包
mybatis.type-aliases-package=com.whpu.domain
#加载Mybatis映射文件
mybatis.mapper-locations=classpath:mapper/*Mapper.xml
#配置服务器端口号
server.port=8088
#配置访问路径
server.servlet.context-path=/score

spring:
  thymeleaf:
    prefix: classpath:/static/
    suffix: .html
    mode: HTML5
    encoding: UTF-8
    content-type: text/html
    cache: false
i)	SpringBoot启动类MySpringBootApplication
//声明该类是一个SpringBoot引导类
@SpringBootApplication
public class MySpringBootApplication {

    //main是java程序的入口
    public static void main(String[] args) {
        //run方法 表示运行SpringBoot的引导类  run参数就是SpringBoot引导类的字节码对象
        SpringApplication.run(MySpringBootApplication.class);
    }
}

4.	项目截图
首页效果截图
 

Springboot启动截图
 
全屏效果、地图效果、表格效果：
 

六、	项目总结
a)	遇到的问题：
1.页面的布局和排版问题。
2.前端后后端怎么交互，怎么把后端数据显示到前端的页面。
3. 后端数据如何显示在eacharts上，它的格式是什么样的，如何批量的显示数据。
4．后端中查询出来的是集合数据，而前端中需要的数组，如何将集合转换成数组。
b)	怎么解决：
1.	参考网上的例子进行排版布局
2.	使用ajax异步请求后端数据
3.	eacharts是数组格式的，将后端调用的数据转化成数组
4.	定义一个长度已知的数组，集合的长度就是数组的长度，然后使用for循环遍历集合，将元素加载到数组中，最后用map集合保存数组，返回map,将map中的key回显给前端页面。

c)	小结：
自己耗费半个月完成的武汉轻工大学录取分数线监测系统，还是成就满满的。从前端页面到后端数据的处理，遇到了很多难题，都通过查资料等各种方式解决掉了，很好的锻炼了自己解决问题的能力。这个项目很清楚显示了武汉轻工大学历年六个学院分数线的情况，分别采用了四种不同的图表，实现了数据的可视化，预计2021年的分数线情况和2020年相差不大，估计会在520分上下波动。通过这次项目，很好的锻炼了自己动手能力。！
