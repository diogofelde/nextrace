import java.sql.*;

public class Leitor {
    public static void buscarPorNome(String nome) {
        try (Connection conn = Banco.conectar()) {
            String sql = "SELECT * FROM usuarios WHERE nome LIKE ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, "%" + nome + "%");
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                System.out.println("Nome: " + rs.getString("nome") + ", Idade: " + rs.getInt("idade"));
            }
        } catch (Exception e) {
            System.out.println("Erro ao buscar dados.");
        }
    }
}
