package app.backend.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="boards")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Board {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
//	@ManyToOne
//	@JoinColumn(name="created_by")
//	private User createdBy;
	
	@OneToMany(mappedBy = "task", cascade = CascadeType.ALL)
	private List<Task> tasks;
	
}
