$(document).ready(function () {
    $('#tabela').DataTable({
        processing: true,
        // Devido ao grande número de CIDs acredito que no futuro será melhor utilizar o backend para buscar, renderizar resultados e etc pois a DataTable carrega TODO banco de dados
        //serverSide: true,
        language: {
            "lengthMenu": "Exibir _MENU_ registros por página",
            "search": "",
            "searchPlaceholder": "Cid ou Descrição",
            "paginate": { "previous": "Voltar", "next" : "Próximo"},
            "zeroRecords": "Sem dados",
            "info": "Exibindo página _PAGE_ de _PAGES_",
            "infoEmpty": "Sem dados",
            "infoFiltered": "(filtrado de _MAX_ regitros totais)"
            },
        ajax: {
            // Trocar a URL pela API que será criada com o CID
            url: 'http://localhost:5145/api/Cid10/Consultar',
            type: 'GET',
            datatype: 'json',
            dataSrc: ''
        },
        columnDefs: [{ 
            width: "05%", targets: 0 },
          ],
        columns: [
            { data: "idCid", title: "CID"},
            { data: "desc", title: 'Descrição'},
        ],
    });
});