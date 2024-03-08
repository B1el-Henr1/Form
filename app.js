class Forsubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.Button);
        if (this.form){
            this.url = this.form.getAttribute("action");
        }
        this.sendForm.bind(this);

    }

    displaySuccess(){
        this.form.innerHTML = this.setttings.Success;
    }

    displayError(){
        this.form.innerHTML = this.settings.console.error;
    }

    getFormObject(){
        const getFormObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
            
        });

        return formObject;
    }

    onSubmission(event){
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";

    }

    async sendForm(){

        try{
            this.onSubmission(event);
            await fetch(this.url, {
            method: "POST",
            headers:{
                "Contemt-Type": "application/json",
                Accept: "application"
            },

            body: JSON.stringfy(this.getFormObject()),

            
        });
        this.displaySuccess();
    } catch(error) {

        this.displayError();
        throw new Error(error);

    }
}

    init(){
        if (this.form) this.formButton.addEventListener("click" , this.sendForm());
        return this;
    }

}

const formSubmit = new FormSubmit({

    form : "[data-form]",
    button : "[data-button]",
    success : "<h1> class = 'success'> Mensagem enviada!</h1>",
    error : "<h1 class = 'error'> Não foi possivel enviar o formulário</h1>" 
});

