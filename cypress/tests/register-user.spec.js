
import LoginPage from "../pages/loginPage";
import registerPage from "../pages/registerPage";
import dataUser from "../fixtures/dataUser.json";

const login = new LoginPage()
const register = new registerPage()


      describe('Registro de novo usuário com sucesso', () => {
        it('Deve registrar um novo usuário com informações válidas', () => {
          register.accessLoginPage()
          register.registerNewUser()
        });

        describe('Tentar registrar um novo usuário com informações incompletas', () => {
          it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
            register.accessLoginPage()
            register.registerNewUserFail()
        
          });
        });
      });

