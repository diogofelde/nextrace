import javax.swing.*;
import java.awt.event.*;

public class Main {
    public static void main(String[] args) {
        Banco.inicializar();

        JFrame frame = new JFrame("Nex Trance");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JLabel userLabel = new JLabel("Usuário:");
        userLabel.setBounds(50, 20, 100, 25);
        frame.add(userLabel);

        JTextField userField = new JTextField();
        userField.setBounds(150, 20, 150, 25);
        frame.add(userField);

        JLabel passLabel = new JLabel("Senha:");
        passLabel.setBounds(50, 60, 100, 25);
        frame.add(passLabel);

        JPasswordField passField = new JPasswordField();
        passField.setBounds(150, 60, 150, 25);
        frame.add(passField);

        JButton loginBtn = new JButton("Entrar");
        loginBtn.setBounds(150, 100, 100, 30);
        frame.add(loginBtn);

        loginBtn.addActionListener(e -> {
            String user = userField.getText();
            String pass = new String(passField.getPassword());

            if (user.equals("admin") && pass.equals("1234")) {
                abrirMenu();
                frame.dispose();
            } else {
                JOptionPane.showMessageDialog(frame, "Credenciais inválidas.");
            }
        });

        frame.setVisible(true);
    }

    public static void abrirMenu() {
        JFrame menu = new JFrame("Menu");
        menu.setSize(400, 300);
        menu.setLayout(null);

        JButton registrarBtn = new JButton("Registrar");
        registrarBtn.setBounds(50, 50, 120, 30);
        menu.add(registrarBtn);

        JButton buscarBtn = new JButton("Buscar");
        buscarBtn.setBounds(200, 50, 120, 30);
        menu.add(buscarBtn);

        registrarBtn.addActionListener(e -> {
            String nome = JOptionPane.showInputDialog("Nome:");
            String idadeStr = JOptionPane.showInputDialog("Idade:");
            try {
                int idade = Integer.parseInt(idadeStr);
                Registro.salvar(nome, idade);
            } catch (NumberFormatException ex) {
                JOptionPane.showMessageDialog(menu, "Idade inválida.");
            }
        });

        buscarBtn.addActionListener(e -> {
            String nome = JOptionPane.showInputDialog("Buscar por nome:");
            Leitor.buscarPorNome(nome);
        });

        menu.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        menu.setVisible(true);
    }
}
