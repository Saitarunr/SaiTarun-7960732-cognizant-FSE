package com.cognizant.spring_learn.model;

import java.io.Serializable;

public class Country implements Serializable {
    private static final long serialVersionUID = 1L;

    private String code;
    private String name;

    public Country() {
    }

    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}