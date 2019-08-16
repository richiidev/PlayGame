class DataTable{
     initDatatables(){
        jQuery(document).ready(function(){
        $("[datatable]").DataTable({
            dom: 'Bfrtip',
            buttons: [
                'excel', 'csv', 'pdf'
            ]
        })
    });
    }
}
