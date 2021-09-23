package com.whpu.mapper;

import com.whpu.domain.Score;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

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
