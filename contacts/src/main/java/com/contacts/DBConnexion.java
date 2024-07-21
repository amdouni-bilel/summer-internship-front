package com.contacts;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnexion {
    static   String URL="jdbc:mysql://localhost:3306/db_stage";
    static   String Password="";
    static   String user="root";
    static String driver = "com.mysql.cj.jdbc.Driver";
    public static Connection getCon(){
        Connection con=null;
        try{
            Class.forName(driver);
            try{
                con = DriverManager.getConnection(URL,user,Password);
            }catch(SQLException e){
                throw new RuntimeException(e);
            }
        }catch(ClassNotFoundException e){
            throw new RuntimeException(e);
        }
        return con;

    }
    public static void closeConnection(Connection con) {
        try {
            if (con != null && !con.isClosed()) {
                con.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
