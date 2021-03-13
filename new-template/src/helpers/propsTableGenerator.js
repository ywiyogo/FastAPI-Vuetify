export function generateMdTable(VueComponent){
    console.log(VueComponent);

    let headersExclude = ['validator'];

    let headers = [];
    let rows = [];

    // Collecting headers
    for(let prop in VueComponent.props){
        for(let itemName in VueComponent.props[prop]){
            if(headers.indexOf(itemName) ===-1){
                headers.push(itemName);
            }
        }
    }

    // // Remove excluded
    headersExclude.forEach(h=>{
        if(headers.indexOf(h) !== -1) {
            headers.splice(headers.indexOf(h), 1);
        }
    });

    headers.sort();

    // Collecting rows
    for(let propName in VueComponent.props){
        let row = [propName];
        headers.forEach(h=>{
            // For empty ones let's use space
            let col = '';
            if(VueComponent.props[propName].hasOwnProperty(h)){
                col = VueComponent.props[propName][h];
                if(typeof col === 'function'){
                    col = col.toString();
                    col = col.replace('function', '').replace('() { [native code] }', '');
                }
                col = col!==null? col.toString(): 'null';
            }

            // To html entities
            col = col.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
                return '&#'+i.charCodeAt(0)+';';
            }).replace(/\r\n|\n|\t|\s{2,}/gm, '');

            row.push(col);
        });
        rows.push(row);
    }

    // Add name header for prop
    headers.unshift('name');

    const cellsGenerator = (array, addUnderline = false)=>{
        let template = '';
        let underlineTemplate = '';
        array.forEach(a=>{
            template += `| ${a} `;
            if(addUnderline) {
                let underline = '-'.repeat(a.length);
                underlineTemplate += `| ${underline} `;
            }
        });
        // End v-line
        template += '|';
        if(addUnderline) {
            underlineTemplate += '|';
            template += `\n${underlineTemplate}`;
        }

        return template;
    }

    let headerTemplate = cellsGenerator(headers, true);
    let rowsTemplate = '';
    rows.forEach(r=>{
        rowsTemplate += `${cellsGenerator(r)}\n`;
    });

    return `${headerTemplate}\n${rowsTemplate}`;
}


