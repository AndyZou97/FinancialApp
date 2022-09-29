package com.xpanxion.FinancialApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;


@Entity
    @Table(name = "account")

    public class Account {
        private @Id
        @GeneratedValue long id;
        private  String username;
        private  String password;
        private boolean loggedIn;
        public Account() {
        }
        public Account( String username,
                     String password) {
            this.username = username;
            this.password = password;
            this.loggedIn = false;
        }
        public long getId() {
            return id;
        }
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        public boolean isLoggedIn() {
            return loggedIn;
        }
        public void setLoggedIn(boolean loggedIn) {
            this.loggedIn = loggedIn;
        }
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Account)) return false;
            Account account = (Account) o;
            return Objects.equals(username, account.getId()) &&
                    Objects.equals(password, account.getPassword());
        }
        @Override
        public int hashCode() {
            return Objects.hash(id, username, password,
                    loggedIn);
        }
        @Override
        public String toString() {
            return "Account{" +
                    "id=" + id +
                    ", username='" + username + '\'' +
                    ", password='" + password + '\'' +
                    ", loggedIn=" + loggedIn +
                    '}';
        }
    }

