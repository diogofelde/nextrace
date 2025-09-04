import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Leitor {
    public static void mostrarDados() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("dados.txt"));
            String linha;
            System.out.println("\n--- Dados Registrados ---");
            while ((linha = reader.readLine()) != null) {
                System.out.println(linha);
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("Erro ao ler os dados.");
        }
    }
}
