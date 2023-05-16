import 'package:flutter/material.dart';
import 'package:flutterprojetfeira/core/theme/app_colors.dart';
import 'package:flutterprojetfeira/core/theme/app_icons.dart';
import 'package:flutterprojetfeira/core/theme/app_typography.dart';

class FiltersComponent extends StatelessWidget {
  const FiltersComponent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      backgroundColor: AppColors.white,
      pinned: true,
      expandedHeight: 54,
      flexibleSpace: ListView(
        physics: BouncingScrollPhysics(),
        scrollDirection: Axis.horizontal,
        children: [
          SizedBox(
            width: 17,
          ),
          FilterItemComponent(
            label: 'Ordenar',
            icon: AppIcons.arrowDown,
          ),
          FilterItemComponent(
            label: 'Pra Retirar',
            icon: AppIcons.arrowDown,
          ),
          FilterItemComponent(
            label: 'Entra Grátis',
          ),
          FilterItemComponent(
            label: 'Vale Refeição',
          ),
          FilterItemComponent(
            label: 'Distância',
            icon: AppIcons.arrowDown,
          ),
          FilterItemComponent(
            label: 'Entrega Parceira',
            icon: AppIcons.arrowDown,
          ),
          FilterItemComponent(
            label: 'Filtros',
            icon: AppIcons.arrowDown,
          ),
          SizedBox(
            width: 16,
          ),
        ],
      ),
    );
  }
}

class FilterItemComponent extends StatelessWidget {
  final String label;
  final String? icon;

  const FilterItemComponent({Key? key, required this.label, this.icon})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 14, bottom: 14, right: 8),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(32),
          color: AppColors.white,
          border: Border.all(
            color: AppColors.grey2,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: Row(
            children: [
              Text(
                label,
                style: AppTypography.filterItemStyle(context)
                    .copyWith(color: AppColors.grey7),
              ),
              if (icon != null)
                Padding(
                  padding: const EdgeInsets.only(left: 2),
                  child: AppIcon(
                    icon!,
                    size: Size(14, 14),
                    color: AppColors.grey7,
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }
}
