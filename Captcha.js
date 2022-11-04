
class Captcha {
	
    constructor(captcha_id, string_length, verify) {
        this.captcha_id = captcha_id;
        this.string_length = string_length;
        this.verify = verify;
    }
	
    setStringLength(nbr) {
        this.string_length = nbr;
    }
	
    setElementId(id) {
        this.captcha_id = id;
    }
	
    getStringLength() {
        return this.string_length;
    }
	
    getElementId() {
        return this.captcha_id;
    }
	
    setCaptcha() {
        var chars = "azertyuiopqsdfghjklmwxcvbn0123456789";
        var captchastring = '';
        for (var i=0; i<this.string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            captchastring += chars.substring(rnum,rnum+1);
        }
        document.getElementById(`${this.captcha_id}`).style.transform = "skew(50deg, 0deg)";
        document.getElementById(`${this.captcha_id}`).style.userSelect = "none";
        document.getElementById(`${this.captcha_id}`).style.fontFamily = "Monospace";
        document.getElementById(`${this.captcha_id}`).style.fontStretch = "ultra-expanded";
        document.getElementById(`${this.captcha_id}`).style.fontWeight = "bold";
        document.getElementById(`${this.captcha_id}`).style.fontSize = "40px";
        document.getElementById(`${this.captcha_id}`).style.textDecoration = "line-through";
        document.getElementById(`${this.captcha_id}`).innerHTML = captchastring;
    }
	
    destroyCaptcha() {
        document.getElementById(`${this.captcha_id}`).innerHTML = "";
    }
	
    verifyCaptcha() {
        if (document.getElementById(`${this.verify}`).value == document.getElementById(`${this.captcha_id}`).innerHTML)
        {
            return true;
        }
        return false;
    }
	
}
