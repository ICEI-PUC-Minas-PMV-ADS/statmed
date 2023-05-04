
$(document).ready(function () {
    $('#tabela').DataTable({
        processing: true,
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
            url: 'http://localhost:5145/api/Paciente/Consultar',
            type: 'GET',
            datatype: 'json',
            dataSrc: ''
        },
        columnDefs: [{ 
            width: "05%", targets: 0 },
          ],
        columns: [
            { data: "idSame", title: "IdSame"},
            { data: "nome", title: "Nome"},
        ],
    });
});