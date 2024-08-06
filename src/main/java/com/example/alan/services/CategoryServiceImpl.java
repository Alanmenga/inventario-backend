package com.example.alan.services;

import com.example.alan.dao.ICategoryDao;
import com.example.alan.model.Category;
import com.example.alan.response.CategoryResponseRest;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private ICategoryDao categoryDoa;

    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<CategoryResponseRest> search() {
        CategoryResponseRest response = new CategoryResponseRest();
        try{
            List<Category> category = (List<Category>) categoryDoa.findAll();
            response.getCategoryResponse().setCategory(category);
            response.setMetadata("Respuesta ok","00","Respesta exitos");
        }catch (Exception e) {
            response.setMetadata("Respuesta fail","00","Error al consultar");
            e.getStackTrace();
            return new ResponseEntity<CategoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<CategoryResponseRest>(response, HttpStatus.OK);
    }
}
