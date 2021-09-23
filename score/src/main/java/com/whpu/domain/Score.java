package com.whpu.domain;

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
