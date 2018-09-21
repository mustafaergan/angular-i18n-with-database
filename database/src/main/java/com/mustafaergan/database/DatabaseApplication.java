package com.mustafaergan.database;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DatabaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatabaseApplication.class, args);
	}

	@RequestMapping("/message/{lang}")
	public String dataGonder(@PathVariable("lang") String lang){
		if(lang.equals("en"))
			return "{  \"HOME\": {    \"TITLE\": \"Hello Angular with ngx-translate!\",    \"SELECT\": \"Change language\"  }}";
		if(lang.equals("fr"))
			return "{  \"HOME\": {    \"TITLE\": \"Bonjour Angular avec ngx-translate\",    \"SELECT\": \"Changer la langue\"  }}";
		else
			return "{  \"HOME\": {    \"TITLE\": \"Merhaba Angular beraber ngx-translate!\",    \"SELECT\": \"Dil değiştir\"  }}";
	}

}
