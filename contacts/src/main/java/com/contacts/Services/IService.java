package com.contacts.Services;
import java.util.Set;
public interface IService<T> {
    public void Add(T t);
    public void Modify(T t);
    public void Delete(Long id);
    public Set<T> getAll();
    public T getOneById(Long id);

}

