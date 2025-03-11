import LoginPage from "../../pages/loginPage";
import dataUser from "../../fixtures/dataUser.json";
import historyPage from "../../pages/historyPage";

const login = new LoginPage()
const history = new historyPage()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    login.accessLoginPage()
    login.loginAnyWithUser(dataUser.userSucess.username, dataUser.userSucess.password)
    login.loginSucessfulPage()
    history.historytransaction()
    
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      login.accessLoginPage()
      login.loginAnyWithUser(dataUser.userSucess.username, dataUser.userSucess.password)
      login.loginSucessfulPage()
      history.noHistoryTransaction()
    });
  });
});


