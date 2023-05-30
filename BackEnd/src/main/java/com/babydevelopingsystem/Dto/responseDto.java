package com.babydevelopingsystem.Dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class responseDto {

    private String code;
    private String message;
    private Object content;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getContent() {
        return content;
    }

    public void setContent(Object content) {
        this.content = content;
    }
}
