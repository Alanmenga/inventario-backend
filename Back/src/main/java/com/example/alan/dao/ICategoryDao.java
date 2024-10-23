package com.example.alan.dao;

import com.example.alan.model.Category;
import org.springframework.data.repository.CrudRepository;

public interface ICategoryDao extends CrudRepository<Category, Long> {
}
