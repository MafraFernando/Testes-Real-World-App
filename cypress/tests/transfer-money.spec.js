import LoginPage from "../pages/loginPage";
import dataUser from "../fixtures/dataUser.json";
import transferPage from "../pages/transferPage";

const login = new LoginPage()
const transfer = new transferPage()


describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        login.accessLoginPage()
        login.loginAnyWithUser(dataUser.userSucess.username, dataUser.userSucess.password)
        login.loginSucessfulPage()
        transfer.newTransfer('Fernando Mafra')
        transfer.amountTransfer('1200', 'test transfer only')
    
    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
        it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
            login.accessLoginPage()
            login.loginAnyWithUser(dataUser.userSucess.username, dataUser.userSucess.password)
            login.loginSucessfulPage()
            transfer.newTransfer('Fernando Mafra')
            transfer.amountTransfer('180000000000', 'this transfer should be impossible due to lack of funds')
        });
      });
  });