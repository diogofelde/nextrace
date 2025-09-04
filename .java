$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$registro = @"
import java.io.FileWriter;
import java.io.IOException;

public class Registro {
    public static void salvar(String nome, int idade) {
        try {
            FileWriter writer = new FileWriter("dados.txt", true);
            writer.write("Nome: " + nome + ", Idade: " + idade + "\n");
            writer.close();
            System.out.println("Dados salvos com sucesso!");
        } catch (IOException e) {
            System.out.println("Erro ao salvar os dados.");
        }
    }
}
"@
[System.IO.File]::WriteAllText("D:\Projeto\NexTrace\Registro.java", $registro, $utf8NoBom)
