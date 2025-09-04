import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = -1;

        do {
            System.out.println("\n--- Nex Trance ---");
            System.out.println("1. Registrar novo usuário");
            System.out.println("2. Mostrar registros");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");

            if (!scanner.hasNextInt()) {
                System.out.println("Entrada inválida. Tente novamente.");
                scanner.next(); // descarta entrada inválida
                continue;
            }

            opcao = scanner.nextInt();
            scanner.nextLine(); // Limpa o buffer

            switch (opcao) {
                case 1:
                    System.out.print("Digite seu nome: ");
                    String nome = scanner.nextLine();
                    System.out.print("Digite sua idade: ");

                    if (!scanner.hasNextInt()) {
                        System.out.println("Idade inválida.");
                        scanner.next(); // descarta entrada inválida
                        break;
                    }

                    int idade = scanner.nextInt();
                    scanner.nextLine(); // Limpa o buffer
                    Registro.salvar(nome, idade);
                    break;
                case 2:
                    Leitor.mostrarDados();
                    break;
                case 0:
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 0);

        scanner.close();
    }
}
