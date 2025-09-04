import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class Registro {
    public static void salvar(String nome, int idade) {
        if (!nome.matches("[A-Za-zÀ-ÿ\\s]+")) {
            System.out.println("Nome inválido.");
            return;
        }

        try (Connection conn = Banco.conectar()) {
            String sql = "INSERT INTO usuarios (nome, idade) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, nome);
            stmt.setInt(2, idade);
            stmt.executeUpdate();
        } catch (Exception e) {
            System.out.println("Erro ao salvar no banco.");
        }

        try (FileWriter writer = new FileWriter("dados.csv", true)) {
            writer.write(nome + "," + idade + "\n");
        } catch (IOException e) {
            System.out.println("Erro ao salvar no CSV.");
        }

        System.out.println("Dados salvos com sucesso!");
    }
}
