package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    // Setter Injection

    public void setRepository(BookRepository repository) {

        this.repository = repository;

    }

    public void startLibraryService() {

        System.out.println("Book Service Initialized");

        System.out.println(repository.fetchLibraryRecord());

        System.out.println("Dependency Injection Completed Successfully.");

    }

}
