package com.example.alan.response;

import com.example.alan.model.Category;
import lombok.Data;

import java.util.List;

@Data
public class CategoryResponse {
    private List<Category> category;
}
