export default class Content { 
    private temperatura: string = "0"; 
    private luminosidade: string = "0";
    private umidade: string = "0";
    private currentcolor: string = "0";
    private statusbuzzer: string = "0";
   
    constructor(temperatura: string, luminosidade: string, umidade: string, currentcolor: string, statusbuzzer: string) { 
        this.temperatura = temperatura 
        this.luminosidade = luminosidade
        this.umidade = umidade
        this.currentcolor = currentcolor
        this.statusbuzzer = statusbuzzer
    } 
    

    /**
     * Getter $temperatura
     * @return {string }
     */
	public get $temperatura(): string  {
		return this.temperatura;
	}

    /**
     * Setter $temperatura
     * @param {string } value
     */
	public set $temperatura(value: string ) {
		this.temperatura = value;
    }
    

    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Getter $currentcolor
     * @return {string }
     */
	public get $currentcolor(): string  {
		return this.currentcolor;
	}

    /**
     * Getter $statusbuzzer
     * @return {string }
     */
	public get $statusbuzzer(): string  {
		return this.statusbuzzer;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}

    /**
     * Setter $currentcolor
     * @param {string } value
     */
	public set $currentcolor(value: string ) {
		this.currentcolor = value;
	}

    /**
     * Setter $statusbuzzer
     * @param {string } value
     */
	public set $statusbuzzer(value: string ) {
		this.statusbuzzer = value;
	}

 
}