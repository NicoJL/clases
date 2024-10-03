
function showElement(element) {
	var name = element.parent().parent().find('.lblName').text(),
	id = element.parent().parent().find('.lblId').text(),
	email = element.parent().parent().find('.lblEmail').text(),
	phone = element.parent().parent().find('.lblPhone').text();

	$('.lblModalId').text(id);
	$('.lblModalName').text(name);
	$('.lblModalEmail').text(email);
	$('.lblModalPhone').text(phone);

	$('#modalClients').modal('show');
}

function addElement() {
	var name = $('#txtName').val(),
	email = $('#txtEmail').val(),
	phone = $('#txtPhone').val();

	if (name.trim().length > 0 && email.trim().length > 0 && phone.trim().length == 10) {
		var newElement = `<tr>
			<td class="lblId">${parseInt($('#tblClients tr:last').find('.lblId').text()) + 1}</td>
			<td class="lblName">${name}</td>
			<td class="lblEmail">${email}</td>
			<td class="lblPhone">${phone}</td>
			<td>
				<a href="#" class="btnShow" data-toggle="modal">VER DETALLES</a>
			</td>
		</tr>`;

		$('#tblClients tbody').append(newElement);
		$('#modalAdd').modal('hide');
	} else {
		alert('Debes de llenar todos los campos');
	}
}

$(function () {
	/*
	var nombre = '800';
	
	alert(parseInt(nombre) + 700);
	*/

	$(document).on('click','.btnShow', function (e) {
		showElement($(this));
	});

	$('#btnAdd').on('click', function (e) {
		$('#txtName').val('');
		$('#txtEmail').val('');
		$('#txtPhone').val('');
		$('#modalAdd').modal('show');
	});

	$('#btnSave').on('click', function(e) {
		e.preventDefault();
		addElement();
	})
});