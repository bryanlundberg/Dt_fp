package app.backend.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BoardDTO {
	
	private long id;
	
	private String name;
	
//	private UserDTO createdBy;
	
	private List<TaskDTO> tasks;
	
}
