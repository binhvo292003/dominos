package com.vqb.dominos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collation = "pizzas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pizza {
    @Id
    private ObjectId id;
    private String title;
    private String trailerLink;
    private List<String> categories;
    private String poster;
    @DocumentReference
    private List<Review> reviewIds;
}
