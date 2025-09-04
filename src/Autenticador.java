import java.util.Scanner;

public class Autenticador {
    private static final String USUARIO = "admin";
    private static final String SENHA = "1234";

    public static boolean autenticar(Scanner scanner) {
        System.out.print("Usuário: ");
        String user = scanner.nextLine();
        System.out.print("Senha: ");
        String pass = scanner.nextLine();
        return USUARIO.equals(user) && SENHA.equals(pass);
    }
}
