package com.contacts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration;
import org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

/*//@EnableJpaRepositories(basePackages = "com.contacts.repository")
//@EntityScan(basePackages = "com.contacts.model")
//@SpringBootApplication(scanBasePackages = "com.contacts")
@EntityScan(basePackages = "com.contacts.model")
//@EntityScan("com.contacts.model")*/
//@SpringBootApplication()
//@EntityScan(basePackages = "com.contacts.model")
//@EnableJpaRepositories(basePackages = "com.contacts.repository")
//@ComponentScan(basePackages ="com.contacts.Services" )
//@SpringBootApplication(exclude = {BatchAutoConfiguration.class, CassandraDataAutoConfiguration.class})
@SpringBootApplication
@EntityScan(basePackages = "com.contacts.model")
public class ContactsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactsApplication.class, args);
	}

}
