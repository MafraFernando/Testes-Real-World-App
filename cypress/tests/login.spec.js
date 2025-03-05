import LoginPage from "../pages/loginPage";
import dataUser from "../fixtures/dataUser.json";

const login = new LoginPage()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    login.accessLoginPage()
    login.loginAnyWithUser(dataUser.userSucess.username, dataUser.userSucess.password)
    login.loginSucessfulPage()
    
  });

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      login.accessLoginPage()
      login.loginAnyWithUser(dataUser.userFail.username, dataUser.userFail.password)
      login.loginWithErrorAlert()
     }); 

    
  });

});
