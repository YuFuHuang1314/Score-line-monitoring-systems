package com.whpu.test;

import com.whpu.MySpringBootApplication;
import com.whpu.domain.Score;
import com.whpu.mapper.ScoreMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
//测试方法
@RunWith(SpringRunner.class)
@SpringBootTest(classes = MySpringBootApplication.class)
public class MybatisTest {


    @Autowired
    private ScoreMapper scoreMapper;

    @Test
    public void test(){
        List<Score> list=scoreMapper.queryScoreList();
       for (int i=0;i<list.size();i++){
           System.out.println(list.get(i));
       }
    }
    @Test
    public void test01(){
        List<Score> list01=scoreMapper.queryScoreList01("2016");
        int[] grade01=new int[list01.size()];
        for (int i = 0; i < list01.size(); i++) {
            grade01[i] = list01.get(i).getValue();
        }
        for (int i=0;i<grade01.length;i++){
            System.out.println(grade01[i]);
        }
    }

}
