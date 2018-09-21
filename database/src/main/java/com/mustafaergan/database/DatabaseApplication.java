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
    public String dataGonder(@PathVariable("lang") String lang) {
        if (lang.equals("en"))
            return "{  \"HOME\": {    \"TITLE\": \"Hello Angular with ngx-translate!\",    \"SELECT\": \"Change language\"  }}";
        if (lang.equals("fr"))
            return "{  \"HOME\": {    \"TITLE\": \"Bonjour Angular avec ngx-translate\",    \"SELECT\": \"Changer la langue\"  }}";
        else
            return "{  \"HOME\": {    \"TITLE\": \"Merhaba Angular beraber ngx-translate!\",    \"SELECT\": \"Dil değiştir\"  }}";
    }

    @RequestMapping("/message/lazy/{lang}/{modul}")
    public String dataGonderModul(@PathVariable("lang") String lang, @PathVariable("modul") String modul) {
        if (lang.equals("en")) {
            if (modul.equals("admin")) {
                return "{  \"ADMIN\": {    \"TITLE\": \"Hello ADMIN!\"}}";
            } else if (modul.equals("person")) {
                return "{  \"PERSON\": {    \"TITLE\": \"Hello PERSON!\"}}";
            } else {
                return "{  \"HOME\": {    \"TITLE\": \"Hello Angular with ngx-translate!\",    \"SELECT\": \"Change language\"  }}";
            }
        }
        if (lang.equals("fr")) {
            if (modul.equals("admin")) {
                return "{  \"ADMIN\": {    \"TITLE\": \"Bonjour ADMIN!\"}}";
            } else if (modul.equals("person")) {
                return "{  \"PERSON\": {    \"TITLE\": \"Bonjour PERSON!\"}}";
            } else {
                return "{  \"HOME\": {    \"TITLE\": \"Bonjour Angular avec ngx-translate\",    \"SELECT\": \"Changer la langue\"  }}";
            }
        } else {
            if (modul.equals("admin")) {
                return "{  \"ADMIN\": {    \"TITLE\": \"Merhaba admin!\"}}";
            } else if (modul.equals("admin")) {
                return "{  \"PERSON\": {    \"TITLE\": \"Merhaba PERSON!\"}}";
            } else {
                return "{  \"HOME\": {    \"TITLE\": \"Merhaba Angular beraber ngx-translate!\",    \"SELECT\": \"Dil değiştir\"  }}";
            }
        }
    }

}
