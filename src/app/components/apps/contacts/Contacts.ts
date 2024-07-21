export class Contacts {
  private id: number;
  private fname: string;
  private lname: string;
  private societe: string;
  private socadd: string;
  private soctlph: string;
  private tlph: string;
  private post: string;
  private comment: string;
  private _image: string;

  constructor(
    id: number,
    fname: string,
    lname: string,
    societe: string,
    socadd: string,
    soctlph: string,
    tlph: string,
    post: string,
    comment: string,
    image: string
  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.societe = societe;
    this.socadd = socadd;
    this.soctlph = soctlph;
    this.tlph = tlph;
    this.post = post;
    this.comment = comment;
    this._image = image;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getFname(): string {
    return this.fname;
  }

  setFname(fname: string): void {
    this.fname = fname;
  }

  getLname(): string {
    return this.lname;
  }

  setLname(lname: string): void {
    this.lname = lname;
  }

  getSociete(): string {
    return this.societe;
  }

  setSociete(societe: string): void {
    this.societe = societe;
  }

  getSocadd(): string {
    return this.socadd;
  }

  setSocadd(socadd: string): void {
    this.socadd = socadd;
  }

  getSoctlph(): string {
    return this.soctlph;
  }

  setSoctlph(soctlph: string): void {
    this.soctlph = soctlph;
  }

  getTlph(): string {
    return this.tlph;
  }

  setTlph(tlph: string): void {
    this.tlph = tlph;
  }

  getPost(): string {
    return this.post;
  }

  setPost(post: string): void {
    this.post = post;
  }

  getComment(): string {
    return this.comment;
  }

  setComment(comment: string): void {
    this.comment = comment;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
