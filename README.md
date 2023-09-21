# Diecezko.cz

**EN:** The online brochure for regular youth meetings at Hradec Kralove.

**CZ:** Online verze brožury pro účely pravidelného diecézního setkání v Hradci Králové.


## Motivace a požadavky

V minulých letech se na královehradecká diecézka vždy tiskly papírové brožury. V nich byly veškeré informace o programu, nabídka workshopu atd. 

Letošní rok přišel podmět, zkusit udělat místo papírové verze digitální. Ta si **slibuje** především:

- méně natisknutého papíru na jedno použití,
- jednouší aktualizaci informací v případě změny
- a možnost se na nabídku volitelného programu podívat již dopředu.

Na základě těchto cílů a zkušeností jsou **požadavky** na online brožuru následující.

- Obsahově musí nahradit celou brožuru. Musí v ní být obsaženy veškeré informace o Diecézku.
- Řešení musí být robustní, tj. v den konání musí zvládnout odbavit vysoký počet dotazů (cca 200–600 účastníků).
- Měla by fungovat i v offline verzi, tj. mělo by si ji být možné stáhnout dopředu do mobilu alespoň v minimální podobě.
- Cílovým zařízením jsou mobilní telefony.
- Cílem je udělat spíše přehlednou a interaktivní brožuru než kompletní aplikaci, která zvládne všechno.
- Řešení by mělo být pro církev udržitelné, nestát moc peněz, nebýt náročné na zprávu, být znovu použitelné.

## Návrh technologií a architektury

Z definovaných požadavků a na základě zkušeností s určitými technologiemi jsem zvolil následující technologie.

- O hostování se aplikace na úrovni serveru a DNSka se postará **Cloudflare**. Důvodem je pozitivní zkušenost, cena, spolehlivost a kvalita, integrace s prostředím Gitu.
- Aplikace bude fungovat jako **PWA** (progresivní webová aplikace). Důvodem je podpora u prohlížečů. Multiplatformní řešení. Pro instalaci není třeba aplikaci přidávat do apps storů. Navíc je pomocí service workerů možné zobrazovat notifikace.
- PWA se bude buildit pomocí **Next.js**, a to z důvodu možnosti statické exportů, který minimalizuje náročnost na výkon serveru. O to stylování se postará **Tailwind CSS**.
- Aplikace bude logovaná v **GitHubu** jako public repo, aby se do vývoje mohl zapojit každý, kdo by měl chuť.

## Vývoj

Projekt je vyvíjen veřejně, aby se do tvorby mohl zapojit každý, kdo by měl zájem. Snažíme se držet pracovní workflow tak, že jeden balíček problémů, jedna *Issues*, jeden *Pull Request*. Nic by nemělo jít do mainu bez *Pull Requstu*. *(Samozřejmě až na výjimky, třeba u debuggování Github Actions.)*

Pokud by ses chtěl do projektu aktivně zapojit, napiš na dev@diecezko.cz, rádi Tě mezi sebe přiberme.

### Materiály

Podklady a materiály jsou uchovávány na dvou místech:

1.	**V repu** – veškeré technické věci týkající se vývoje, tech. úkoly, tech. problémy, …
2.	**Drive** – obsahové věci, které mají do brožury přijít, … (musíme ti nasdílet, kdybys potřeboval, napiš na mail dev@diecezko.cz)


### Commandy

```sh
yarn # install dependencies
yarn dev # local dev
```


## Links

- Repository with API proxy server https://github.com/petrkucerak/api.diecezko.cz