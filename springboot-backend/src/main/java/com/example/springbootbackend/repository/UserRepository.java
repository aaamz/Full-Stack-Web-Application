package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
