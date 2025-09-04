import java.sql.*;

public class Banco {
    private static final String URL = "jdbc:sqlite:dados.db";

    public static Connection conectar() {
        try {
            return DriverManager.getConnection(URL);
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco.");
            return null;
        }
    }

    public static void inicializar() {
        try (Connection conn = conectar(); Statement stmt = conn.createStatement()) {
            String sql = "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)";
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println("Erro ao inicializar banco.");
        }
    }
}
