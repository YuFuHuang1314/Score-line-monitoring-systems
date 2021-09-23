package com.whpu.controller;

import com.whpu.domain.Score;
import com.whpu.mapper.ScoreMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ScoreController {
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
}
